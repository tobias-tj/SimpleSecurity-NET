using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SecureWebSite.Server.Models;
using SecureWebSite.Server.Utilities;
using System.Net;
using System.Security.Claims;

namespace SecureWebSite.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SecureWebsiteController(SignInManager<User> sm, UserManager<User> um) : ControllerBase
    {
        private readonly SignInManager<User> signInManager = sm;
        private readonly UserManager<User> userManager = um;

        [HttpPost("register")]
        public async Task<ActionResult> RegisterUser(User user)
        {
            string message = "";
            IdentityResult result = new();

            try
            {
                User _user = new User()
                {
                    Name = user.Name,
                    Email = user.Email,
                    PasswordHash = user.PasswordHash,
                    UserName = user.UserName,
                };

                result = await userManager.CreateAsync(_user, _user.PasswordHash);

                if(!result.Succeeded)
                {
                    var errors = result.Errors.Select(e => e.Description).ToList();
                    return BadRequest(new ApiErrorResponse
                    {
                        Success = false,
                        StatusCode = (int)HttpStatusCode.BadRequest,
                        Message = "User Registration Failed",
                        Errors = errors
                    });
                }

                message = "Registered Succesfully";
            }catch (Exception ex)
            {
                return BadRequest(new ApiErrorResponse
                {
                    Success = false,
                    StatusCode = (int)HttpStatusCode.InternalServerError,
                    Message = "Something went wrong, please try again register.",
                    Errors = new List<string> { ex.Message }
                });
            }

            return Ok(new ApiResponse<object>
            {
                Success = true,
                StatusCode = (int)HttpStatusCode.OK,
                Message = message,
                Result = result
            });

        }

        [HttpPost("login")]
        public async Task<ActionResult> LoginUser(Login login)
        {
            string message = "";

            try
            {
                User _user = await userManager.FindByEmailAsync(login.Email);

                if(_user != null && !_user.EmailConfirmed)
                {
                    _user.EmailConfirmed = true;
                }

                var result = await signInManager.PasswordSignInAsync(_user, login.Password, login.Remember, false);

                if (!result.Succeeded)
                {
                    return Unauthorized("Check your login credentials and try again");
                }

                _user.LastLogin = DateTime.Now;
                var updateResult = await userManager.UpdateAsync(_user);

                message = "Login Succesfull";
            }
            catch (Exception ex)
            {
                return BadRequest("Something went wrong, please try again. " + ex.Message);
            }

            return Ok(new { message = message });
        }

        [HttpGet("logout"), Authorize]
        public async Task<ActionResult> LogoutUser()
        {
            try
            {
                await signInManager.SignOutAsync();
            }
            catch (Exception ex)
            {
                return BadRequest(new ApiErrorResponse
                {
                    Success = false,
                    StatusCode = (int)HttpStatusCode.InternalServerError,
                    Message = "Something went wrong, please try again logout.",
                    Errors = new List<string> { ex.Message }
                });
            }
            return Ok(new ApiResponse<object>
            {
                Success = true,
                StatusCode= (int)HttpStatusCode.OK,
                Message= "Close your account success!"
            });
        }


        [HttpGet("dashboard"), Authorize]
        public ActionResult DashboardUser() 
        {
            try
            {
                string[] parthers = { "Microsoft", "Oracle", "Apple" };
                return Ok(new ApiResponse<string[]>
                {
                    Success = true,
                    StatusCode = (int)HttpStatusCode.OK,
                    Message = "Parthers retrieved succesfully",
                    Result = parthers 
                });
            }catch(Exception ex)
            {
                return BadRequest(new ApiErrorResponse
                {
                    Success = false,
                    StatusCode = (int)HttpStatusCode.InternalServerError,
                    Message = "An error ocurred while retrieving the parthers",
                    Errors = new List<string> { ex.Message }
                });
            }

        }

        [HttpGet("home/{email}"), Authorize]
        public async Task<ActionResult> HomePage(string email)
        {
            try
            {
                User userInfo = await userManager.FindByEmailAsync(email);
                if (userInfo == null)
                {
                    return BadRequest(new ApiErrorResponse
                    {
                        Success = false,
                        StatusCode = (int)HttpStatusCode.BadRequest,
                        Message = "User Not Found",
                        Errors = new List<string> { "The provided email does not correspond to any user." }
                    });
                }
                return Ok(new ApiResponse<User>
                {
                    Success = true,
                    StatusCode = (int)HttpStatusCode.OK,
                    Message = "User success",
                    Result= userInfo
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new ApiErrorResponse
                {
                    Success = false,
                    StatusCode = (int)HttpStatusCode.InternalServerError,
                    Message = "An error ocurred while retrieving the user",
                    Errors = new List<string> { ex.Message }
                });
            }
        }

        [HttpGet("check")]
        public async Task<ActionResult> CheckUser()
        {
            User currentUser = new();

            try
            {
                var _user = HttpContext.User;
                var principals = new ClaimsPrincipal(_user);
                var result = signInManager.IsSignedIn(principals);
                if (result)
                {
                    currentUser = await signInManager.UserManager.GetUserAsync(principals);
                }
                else
                {
                    return Forbid();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new ApiErrorResponse
                {
                    Success = false,
                    StatusCode= (int)HttpStatusCode.InternalServerError,
                    Message = "Someting went wrong please try again. ",
                    Errors = new List<string> { ex.Message } 
                });
            }

            return Ok(new ApiResponse<User>
            {
                Success = true,
                StatusCode = (int)HttpStatusCode.OK,
                Message = "Logged in",
                Result = currentUser
            });
        }

    }
}

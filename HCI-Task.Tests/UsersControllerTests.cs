using FakeItEasy;
using FluentAssertions;
using HCI_Task.Server.Controllers;
using HCI_Task.Server.Data.DTOs;
using HCI_Task.Server.Entities;
using HCI_Task.Server.Repositories.UserRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Moq;

namespace HCI_Task.Tests
{
    public class UserControllerTests
    {
        private readonly IUserRepository _userRepository;
        public UserControllerTests()
        {
            _userRepository = A.Fake<IUserRepository>();
        }

        [Fact]
        public async Task UserController_GetAllUsers_ReturnOk()
        {
            //Arrange
            var users = A.Fake<ICollection<UserDTO>>();
            var UsersList = A.Fake<List<UserDTO>>();
            
            A.CallTo(() => _userRepository.GetAllUsers()).Returns(Task.FromResult(UsersList));
            var controller = new UserController(_userRepository);

            // ACT
            var actionResult = await controller.GetAllUsers();
            //Assert
            var result = actionResult.Result as OkObjectResult;
            var returnedUsers = result.Value as IEnumerable<UserDTO>;
            Assert.NotNull(result);

        }

        //Other Tests
        //# Test controllers handle BadRequest with wrong or missing parameters
        //# Test Correct responses are sent on different scenarios
        //# Test Repositories
    }
}
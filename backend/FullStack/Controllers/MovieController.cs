using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FullStack.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FullStack.Controllers
{
    //Define as API controller
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        //Context Attribute
        private MovieCollectionContext context;
        //Construct the Class:
        public MovieController(MovieCollectionContext temp) {
            context = temp;
        }
        //Define Get Method response
        public IEnumerable<Movie> Get()
        {
            //Retrive Data from context
            var data = context.Movies.ToArray();
            //Return Data
            return data;
        }
        //Define Post Method response
        //public void Post(Movie movie)
        //{

        //}
    }
}


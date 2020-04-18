using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASP_.Net_Core_ToDo.Interfaces;
using ASP_.Net_Core_ToDo.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ASP_.Net_Core_ToDo.Controllers
{
    public class ItemsController : Controller
    {
        private readonly IItems _items;

        public ItemsController(IItems iitems)
        {
            _items = iitems;
        }

        [HttpGet]
        public List<string> All()
        {
            return _items.allItemsText;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASP_.Net_Core_ToDo.Interfaces;
using ASP_.Net_Core_ToDo.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ASP_.Net_Core_ToDo.Controllers
{
    public class ItemsController : Controller
    {
        private IItems _items;

        public ItemsController(IItems iitems)
        {
            _items = iitems;
        }

        [HttpGet]
        public JsonResult All()
        {
            return Json(_items.allItemsText);
        }

        [HttpPost]
        public void AddItem([FromBody] string text)
        {
            _items.addItem(text);
        }

        [HttpPost]
        public void DeleteItem([FromBody] int index)
        {
            _items.deleteItem(index);
        }
    }
}

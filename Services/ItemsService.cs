using ASP_.Net_Core_ToDo.Interfaces;
using ASP_.Net_Core_ToDo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP_.Net_Core_ToDo.Services
{
    public class ItemsService : IItems
    {
        private readonly List<Item> _allItems = new List<Item> {
            new Item { text = "Написать frontend" },
            new Item { text = "Написать backend" },
            new Item { text = "Сдать лабы" }
        };

        public List<Item> allItems
        {
            get {
                return _allItems;
            }
        }

        public List<string> allItemsText
        {
            get
            {
                return _allItems.Select(item => item.text).ToList();
            }
        }
    }
}

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
        private int _lastId = 3;

        private List<Item> _allItems = new List<Item> {
            new Item { id = 0, text = "Написать frontend" },
            new Item { id = 1, text = "Написать backend" },
            new Item { id = 2, text = "Сдать лабы" }
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

        public void addItem(string text)
        {
            _allItems.Add(new Item { id = this._lastId++, text = text });
        }

        public void deleteItem(int index)
        {
            _allItems.RemoveAt(index);
        }
    }
}

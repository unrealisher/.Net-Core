using ASP_.Net_Core_ToDo.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP_.Net_Core_ToDo.DataBase
{
    public class DBObjects
    {
        private static Dictionary<int, Item> items;

        public static void Initial(AppDB content)
        {
            if (!content.Items.Any())
            {
                Dictionary<int, Item> tmp = GetMockItems;
                foreach (KeyValuePair<int, Item> c in tmp)
                    content.Items.Add(c.Value);
            }

            content.SaveChanges();
        }

        public static Dictionary<int, Item> GetMockItems
        {
            get
            {
                if (items == null)
                {
                    List<Item> mockItems = new List<Item> {
                        new Item { id = 0, text = "Написать frontend" },
                        new Item { id = 1, text = "Написать backend" },
                        new Item { id = 2, text = "Сдать лабы" }
                    };

                    items = new Dictionary<int, Item>();

                    foreach (Item item in mockItems)
                        items.Add(item.id, item);
                }

                return items;
            }
        }
    }
}

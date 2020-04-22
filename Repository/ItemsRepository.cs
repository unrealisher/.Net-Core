using ASP_.Net_Core_ToDo.DataBase;
using ASP_.Net_Core_ToDo.Interfaces;
using ASP_.Net_Core_ToDo.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP_.Net_Core_ToDo.Repository
{
    public class ItemsRepository : IItems
    {
        private readonly AppDB appDBContent;

        public ItemsRepository(AppDB appDBContent)
        {
            this.appDBContent = appDBContent;
        }

        public IEnumerable<Item> allItems => appDBContent.Items;

        public IEnumerable<string> allItemsText => appDBContent.Items.Select(item => item.text);

        public void addItem(string text)
        {
            appDBContent.Items.Add(new Item { text = text });
            appDBContent.SaveChanges();
        }

        public void deleteItem(int index)
        {
            appDBContent.Items.Remove(appDBContent.Items.ToList()[index]);
            appDBContent.SaveChanges();
        }
    }
}

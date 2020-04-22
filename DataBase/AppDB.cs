using ASP_.Net_Core_ToDo.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP_.Net_Core_ToDo.DataBase
{
    public class AppDB: DbContext
    {
        public AppDB(DbContextOptions<AppDB> options): base(options) {}

        public DbSet<Item> Items { get; set; }
    }
}

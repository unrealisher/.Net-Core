using ASP_.Net_Core_ToDo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP_.Net_Core_ToDo.Interfaces
{
    public interface IItems {

        // Возвращает весь список с полем id
        List<Item> allItems { get; }

        // Возвращает массив полей text элементов
        List<string> allItemsText { get; }

        // Добавляет новое дело
        void addItem(string text);

        //Удаляет дело
        void deleteItem(int index);
    }
}

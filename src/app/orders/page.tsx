import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Номер заказа</th>
            <th>Дата</th>
            <th>Цена</th>
            <th className="hidden md:block">Продукты</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">Большое меню бургер (2), Вегетарианская пицца (2), Кока-Кола 1л (2)</td>
            <td className="py-6 px-1">В пути (примерно 10 минут)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">Большое меню бургер (2), Вегетарианская пицца (2), Кока-Кола 1л (2)</td>
            <td className="py-6 px-1">В пути (примерно 10 минут)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">Большое меню бургер (2), Вегетарианская пицца (2), Кока-Кола 1л (2)</td>
            <td className="py-6 px-1">В пути (примерно 10 минут)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;

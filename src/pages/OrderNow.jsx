import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSearch, FaSort, FaEye, FaDownload, FaPrint } from 'react-icons/fa';

const OrdersPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const orders = [
    {
      id: 'ORD-2025-1001',
      date: '2025-03-20',
      customer: 'Yazeed Abdulmumini',
      items: [
        { name: 'Grilled Ribeye Steak', quantity: 2, price: 32.95 },
        { name: 'Wild Mushroom Risotto', quantity: 1, price: 19.95 }
      ],
      total: 85.85,
      status: 'completed',
      paymentMethod: 'Credit Card'
    },
    {
      id: 'ORD-2025-1002',
      date: '2025-03-21',
      customer: 'farah toyeeb',
      items: [
        { name: 'Calamari Fritti', quantity: 1, price: 12.95 },
        { name: 'Seafood Paella', quantity: 1, price: 29.95 },
        { name: 'Classic Tiramisu', quantity: 1, price: 8.95 }
      ],
      total: 51.85,
      status: 'processing',
      paymentMethod: 'PayPal'
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen pb-16">
      {/* Header */}
      <section className="bg-yellow-500 text-gray-700 py-16 px-4 text-center" data-aos="fade-down">
        <h1 className="text-4xl font-bold mb-4">Order Management</h1>
        <p className="text-xl max-w-2xl mx-auto">Track, manage, and review your orders all in one place</p>
      </section>

      {/* Orders Summary */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow p-6" data-aos="zoom-in">
            <p className="text-gray-500 text-sm">Total Orders</p>
            <h3 className="text-3xl font-bold text-gray-700">{orders.length}</h3>
          </div>
          <div className="bg-white rounded-lg shadow p-6" data-aos="zoom-in" data-aos-delay="100">
            <p className="text-gray-500 text-sm">Completed</p>
            <h3 className="text-3xl font-bold text-gray-700">{orders.filter(order => order.status === 'completed').length}</h3>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden" data-aos="fade-up">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order, index) => (
                <tr key={order.id} className="hover:bg-gray-50" data-aos="fade-up" data-aos-delay={index * 100}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.total.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-yellow-500 hover:text-yellow-600 mx-1">
                      <FaEye />
                    </button>
                    <button className="text-gray-500 hover:text-gray-600 mx-1">
                      <FaDownload />
                    </button>
                    <button className="text-gray-500 hover:text-gray-600 mx-1">
                      <FaPrint />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;

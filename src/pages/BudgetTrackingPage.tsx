import React from 'react';
import { DollarSign, PieChart, Users, Receipt } from 'lucide-react';

export default function BudgetTrackingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white">Budget Tracking</h1>
        <p className="text-xl text-white/80 mb-12">
          Keep track of your expenses and split costs fairly with your travel companions.
        </p>

        <div className="grid gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-semibold mb-6 text-white">Current Trip Budget</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/5 p-4 rounded-lg text-center">
                <DollarSign className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">$2,500</div>
                <div className="text-white/60">Total Budget</div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg text-center">
                <Receipt className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">$1,200</div>
                <div className="text-white/60">Spent</div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg text-center">
                <PieChart className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">$1,300</div>
                <div className="text-white/60">Remaining</div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg text-center">
                <Users className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">$625</div>
                <div className="text-white/60">Per Person</div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-semibold mb-6 text-white">Expense Categories</h2>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Accommodation</span>
                  <span className="text-white">$800 / $1,000</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-primary-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Activities</span>
                  <span className="text-white">$200 / $750</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-primary-500 h-2 rounded-full" style={{ width: '27%' }}></div>
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Food & Dining</span>
                  <span className="text-white">$150 / $500</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-primary-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Transportation</span>
                  <span className="text-white">$50 / $250</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-primary-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-semibold mb-6 text-white">Add New Expense</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Description"
                className="px-4 py-2 bg-white/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="number"
                placeholder="Amount"
                className="px-4 py-2 bg-white/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <select className="px-4 py-2 bg-white/90 rounded-lg">
                <option>Select Category</option>
                <option>Accommodation</option>
                <option>Activities</option>
                <option>Food & Dining</option>
                <option>Transportation</option>
              </select>
              <select className="px-4 py-2 bg-white/90 rounded-lg">
                <option>Split With</option>
                <option>Everyone</option>
                <option>Select People</option>
              </select>
              <button className="md:col-span-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-accent-700 transition-colors">
                Add Expense
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-semibold mb-6 text-white">Recent Transactions</h2>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary-600/20 rounded-full flex items-center justify-center">
                    <Receipt className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Hotel Deposit</h3>
                    <p className="text-white/60">Paid by John</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-white">$400</div>
                  <div className="text-white/60">Split: 4 ways</div>
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary-600/20 rounded-full flex items-center justify-center">
                    <Receipt className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Group Dinner</h3>
                    <p className="text-white/60">Paid by Sarah</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-white">$120</div>
                  <div className="text-white/60">Split: Everyone</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
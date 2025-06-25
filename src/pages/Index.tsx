
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Trash2, Home, ShoppingCart, Package, GraduationCap, BarChart3, MessageCircle } from "lucide-react";

const Index = () => {
  const [orderData, setOrderData] = useState({
    customerName: "ABC Corporation",
    customerNumber: "54728954923754890",
    customerEmail: "example@abccorp.com",
    currency: "CAD",
    shippingAddress: "331 Pudding Street\n1500419\nFusion City, ON 95295\nCanada",
    shippingMethod: "Standard",
    shippingCost: "1500.00 CAD",
    comments: ""
  });

  const orderLines = [
    {
      product: "Macbook Pro 15'' 2019",
      productNumber: "54728954923754890",
      listPrice: "3,000.00 CAD",
      quantity: 5,
      amount: "15,000.00 CAD",
      image: "/lovable-uploads/c1bce6af-9b42-42aa-b440-e72061f5e52a.png"
    },
    {
      product: "Macbook Pro 15'' 2019", 
      productNumber: "54728954923754890",
      listPrice: "3,000.00 CAD",
      quantity: 5,
      amount: "15,000.00 CAD",
      image: "/lovable-uploads/c1bce6af-9b42-42aa-b440-e72061f5e52a.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header - Teal Background */}
      <div className="bg-teal-600 text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-medium">Order #123456</h1>
            <div className="flex items-center gap-4 text-sm mt-1">
              <span className="bg-gray-600 px-2 py-1 rounded text-xs">Draft</span>
              <span>ABC Corporation</span>
              <span>2/24/2020</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-xs mr-4">Last updated on Jan 24, 19:43 PM</span>
            <Button variant="ghost" className="text-white border-white hover:bg-teal-700">
              Cancel
            </Button>
            <Button variant="ghost" className="text-white border-white hover:bg-teal-700">
              Save
            </Button>
            <Button className="bg-white text-teal-600 hover:bg-gray-100">
              Submit
            </Button>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 max-w-7xl mx-auto">
        {/* Customer Information Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200 px-6 py-4">
            <h2 className="text-lg font-medium text-gray-900">Customer information</h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div>
                <Label className="text-sm text-gray-700 mb-1 block">Customer Name</Label>
                <Select value={orderData.customerName}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ABC Corporation">ABC Corporation</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-xs text-gray-500 mt-1">Required</span>
              </div>
              
              <div>
                <Label className="text-sm text-gray-700 mb-1 block">Customer Number</Label>
                <Input 
                  value={orderData.customerNumber}
                  className="bg-gray-50"
                  readOnly
                />
              </div>
              
              <div>
                <Label className="text-sm text-gray-700 mb-1 block">Customer Email</Label>
                <div className="text-blue-600 text-sm py-2">
                  {orderData.customerEmail}
                </div>
              </div>
              
              <div>
                <Label className="text-sm text-gray-700 mb-1 block">Currency</Label>
                <Select value={orderData.currency}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CAD">CAD</SelectItem>
                    <SelectItem value="USD">USD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label className="text-sm text-gray-700 mb-1 block">Shipping Address</Label>
                <div className="p-3 bg-gray-50 rounded border text-sm whitespace-pre-line">
                  {orderData.shippingAddress}
                </div>
              </div>
              
              <div>
                <Label className="text-sm text-gray-700 mb-1 block">Shipping Method</Label>
                <Select value={orderData.shippingMethod}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Standard">Standard</SelectItem>
                    <SelectItem value="Express">Express</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-sm text-gray-700 mb-1 block">Shipping Cost</Label>
                <div className="p-3 bg-gray-50 rounded border text-sm font-medium">
                  {orderData.shippingCost}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Lines Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200 px-6 py-4">
            <h2 className="text-lg font-medium text-gray-900">Order lines</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Product Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Product Image</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">List Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orderLines.map((line, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{line.product}</td>
                    <td className="px-6 py-4 text-sm text-blue-600">{line.productNumber}</td>
                    <td className="px-6 py-4">
                      <div className="w-10 h-8 bg-gray-200 rounded border flex items-center justify-center">
                        <div className="w-6 h-4 bg-gray-400 rounded"></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{line.listPrice}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{line.quantity}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{line.amount}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                          <Edit className="h-4 w-4 text-gray-500" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                          <Trash2 className="h-4 w-4 text-gray-500" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 border-t border-gray-200">
            <Label className="text-sm text-gray-700 mb-2 block">Comments</Label>
            <Textarea 
              className="min-h-[80px] resize-none"
              placeholder=""
              value={orderData.comments}
              onChange={(e) => setOrderData({...orderData, comments: e.target.value})}
            />
          </div>
        </div>

        {/* Attachment Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-20">
          <div className="border-b border-gray-200 px-6 py-4">
            <h2 className="text-lg font-medium text-gray-900">Attachment</h2>
          </div>
          
          <div className="p-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
              <div className="text-4xl text-gray-400 mb-2">+</div>
              <div className="text-sm font-medium text-gray-700 mb-1">Drag and Drop</div>
              <div className="text-xs text-gray-500">Select a file or drop one here.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer">
              <Home className="h-5 w-5" />
              <span className="text-sm">Home</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer">
              <ShoppingCart className="h-5 w-5" />
              <span className="text-sm">Orders</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer">
              <Package className="h-5 w-5" />
              <span className="text-sm">Inventory</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer">
              <GraduationCap className="h-5 w-5" />
              <span className="text-sm">Training</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer">
              <BarChart3 className="h-5 w-5" />
              <span className="text-sm">Analytics</span>
            </div>
          </div>
          
          <div className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full cursor-pointer">
            <MessageCircle className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

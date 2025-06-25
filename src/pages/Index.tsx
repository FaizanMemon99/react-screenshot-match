
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Edit, Trash2, Home, Package, Archive, GraduationCap, BarChart3, MessageCircle } from "lucide-react";

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
      image: "/api/placeholder/40/30"
    },
    {
      product: "Macbook Pro 15'' 2019", 
      productNumber: "54728954923754890",
      listPrice: "3,000.00 CAD",
      quantity: 5,
      amount: "15,000.00 CAD",
      image: "/api/placeholder/40/30"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-600 text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-medium">Order #123456</h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="bg-gray-500 px-2 py-1 rounded text-xs">Draft</span>
            <span>ABC Corporation</span>
            <span>2/24/2020</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-300">Last updated on Jan 24, 19:43 PM</span>
          <Button variant="ghost" className="text-white hover:bg-slate-700">Cancel</Button>
          <Button variant="ghost" className="text-white hover:bg-slate-700">Save</Button>
          <Button className="bg-white text-slate-600 hover:bg-gray-100">Submit</Button>
        </div>
      </div>

      <div className="p-6">
        {/* Customer Information Section */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">Customer Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <Label className="text-sm text-gray-600">Customer Name</Label>
                <Select value={orderData.customerName}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ABC Corporation">ABC Corporation</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-xs text-red-500">Required</span>
              </div>
              
              <div>
                <Label className="text-sm text-gray-600">Customer Number</Label>
                <Input 
                  value={orderData.customerNumber}
                  className="mt-1"
                  readOnly
                />
              </div>
              
              <div>
                <Label className="text-sm text-gray-600">Customer Email</Label>
                <div className="mt-1 text-blue-600 text-sm">
                  {orderData.customerEmail}
                </div>
              </div>
              
              <div>
                <Label className="text-sm text-gray-600">Currency</Label>
                <Select value={orderData.currency}>
                  <SelectTrigger className="mt-1">
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
                <Label className="text-sm text-gray-600">Shipping Address</Label>
                <div className="mt-1 text-sm text-gray-800 whitespace-pre-line">
                  {orderData.shippingAddress}
                </div>
              </div>
              
              <div>
                <Label className="text-sm text-gray-600">Shipping Method</Label>
                <Select value={orderData.shippingMethod}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Standard">Standard</SelectItem>
                    <SelectItem value="Express">Express</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-sm text-gray-600">Shipping Cost</Label>
                <div className="mt-1 text-sm text-gray-800">
                  {orderData.shippingCost}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Lines Section */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">Order lines</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left">
                    <th className="py-2 text-sm font-medium text-gray-600">Product</th>
                    <th className="py-2 text-sm font-medium text-gray-600">Product Number</th>
                    <th className="py-2 text-sm font-medium text-gray-600">Product Image</th>
                    <th className="py-2 text-sm font-medium text-gray-600">List Price</th>
                    <th className="py-2 text-sm font-medium text-gray-600">Quantity</th>
                    <th className="py-2 text-sm font-medium text-gray-600">Amount</th>
                    <th className="py-2 text-sm font-medium text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orderLines.map((line, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-3 text-sm">{line.product}</td>
                      <td className="py-3 text-sm text-blue-600">{line.productNumber}</td>
                      <td className="py-3">
                        <div className="w-10 h-8 bg-gray-200 rounded border flex items-center justify-center">
                          <div className="w-6 h-4 bg-gray-400 rounded"></div>
                        </div>
                      </td>
                      <td className="py-3 text-sm">{line.listPrice}</td>
                      <td className="py-3 text-sm">{line.quantity}</td>
                      <td className="py-3 text-sm font-medium">{line.amount}</td>
                      <td className="py-3">
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

            <div className="mt-6">
              <Label className="text-sm text-gray-600">Comments</Label>
              <Textarea 
                className="mt-1 min-h-[80px]"
                placeholder=""
                value={orderData.comments}
                onChange={(e) => setOrderData({...orderData, comments: e.target.value})}
              />
            </div>
          </CardContent>
        </Card>

        {/* Attachment Section */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">Attachment</h2>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="text-4xl text-gray-400 mb-2">+</div>
              <div className="text-sm font-medium text-gray-700 mb-1">Drag and Drop</div>
              <div className="text-xs text-gray-500">Select a file or drop one here.</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex justify-between items-center max-w-full">
          <div className="flex space-x-8">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <Home className="h-4 w-4" />
              <span className="text-sm">Home</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <Package className="h-4 w-4" />
              <span className="text-sm">Orders</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <Archive className="h-4 w-4" />
              <span className="text-sm">Inventory</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <GraduationCap className="h-4 w-4" />
              <span className="text-sm">Training</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <BarChart3 className="h-4 w-4" />
              <span className="text-sm">Analytics</span>
            </button>
          </div>
          <div className="bg-red-500 rounded-full p-3">
            <MessageCircle className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

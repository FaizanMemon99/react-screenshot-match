
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Trash2, Home, ShoppingCart, Package, GraduationCap, BarChart3, MessageCircle, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
      {/* Header - Teal Background - Fixed on mobile */}
      <div className="bg-teal-600 text-white px-4 md:px-6 py-4 md:relative fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h1 className="text-lg md:text-xl font-medium truncate">Order #123456</h1>
            <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm mt-1 flex-wrap">
              <span className="bg-gray-600 px-2 py-1 rounded text-xs">Draft</span>
              <span className="truncate">ABC Corporation</span>
              <span className="whitespace-nowrap">2/24/2020</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="hidden lg:block text-xs mr-4">Last updated on Jan 24, 19:43 PM</span>
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" className="text-white border-white hover:bg-teal-700 text-sm">
                Cancel
              </Button>
              <Button variant="ghost" className="text-white border-white hover:bg-teal-700 text-sm">
                Save
              </Button>
              <Button className="bg-white text-teal-600 hover:bg-gray-100 text-sm">
                Submit
              </Button>
            </div>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden text-white p-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col gap-3 mt-6">
                  <Button variant="outline" className="w-full">Cancel</Button>
                  <Button variant="outline" className="w-full">Save</Button>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Submit</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-6 py-4 md:py-6 max-w-7xl mx-auto pb-20 md:pb-6 pt-20 md:pt-6">
        {/* Customer Information Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4 md:mb-6">
          <div className="border-b border-gray-200 px-4 md:px-6 py-3 md:py-4">
            <h2 className="text-base md:text-lg font-medium text-gray-900">Customer information</h2>
          </div>
          
          <div className="p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
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
                  className="bg-gray-50 text-sm"
                  readOnly
                />
              </div>
              
              <div>
                <Label className="text-sm text-gray-700 mb-1 block">Customer Email</Label>
                <div className="text-blue-600 text-sm py-2 break-all">
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
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
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4 md:mb-6">
          <div className="border-b border-gray-200 px-4 md:px-6 py-3 md:py-4">
            <h2 className="text-base md:text-lg font-medium text-gray-900">Order lines</h2>
          </div>
          
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
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

          {/* Mobile Card View */}
          <div className="md:hidden">
            {orderLines.map((line, index) => (
              <div key={index} className="p-4 border-b border-gray-200 last:border-b-0">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 text-sm mb-1 break-words">{line.product}</h3>
                    <p className="text-xs text-blue-600 break-all">{line.productNumber}</p>
                  </div>
                  <div className="flex gap-2 ml-2">
                    <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                      <Edit className="h-3 w-3 text-gray-500" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                      <Trash2 className="h-3 w-3 text-gray-500" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-500 text-xs">List Price:</span>
                    <p className="font-medium">{line.listPrice}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs">Quantity:</span>
                    <p className="font-medium">{line.quantity}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-500 text-xs">Amount:</span>
                    <p className="font-semibold text-base">{line.amount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 md:p-6 border-t border-gray-200">
            <Label className="text-sm text-gray-700 mb-2 block">Comments</Label>
            <Textarea 
              className="min-h-[80px] resize-none text-sm"
              placeholder=""
              value={orderData.comments}
              onChange={(e) => setOrderData({...orderData, comments: e.target.value})}
            />
          </div>
        </div>

        {/* Attachment Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-20 md:mb-0">
          <div className="border-b border-gray-200 px-4 md:px-6 py-3 md:py-4">
            <h2 className="text-base md:text-lg font-medium text-gray-900">Attachment</h2>
          </div>
          
          <div className="p-4 md:p-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 md:p-8 text-center hover:border-gray-400 transition-colors">
              <div className="text-3xl md:text-4xl text-gray-400 mb-2">+</div>
              <div className="text-sm font-medium text-gray-700 mb-1">Drag and Drop</div>
              <div className="text-xs text-gray-500">Select a file or drop one here.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex items-center justify-between px-4 md:px-6 py-3">
          <div className="flex items-center gap-3 md:gap-6 overflow-x-auto">
            <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer whitespace-nowrap">
              <Home className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-xs md:text-sm">Home</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer whitespace-nowrap">
              <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-xs md:text-sm">Orders</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer whitespace-nowrap">
              <Package className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-xs md:text-sm">Inventory</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer whitespace-nowrap">
              <GraduationCap className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-xs md:text-sm">Training</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer whitespace-nowrap">
              <BarChart3 className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-xs md:text-sm">Analytics</span>
            </div>
          </div>
          
          <div className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full cursor-pointer">
            <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

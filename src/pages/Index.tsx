
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Edit, Trash2, Menu, X, Plus, Upload } from "lucide-react";

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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      {/* Fixed Header - Oracle Redwood Style */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 py-3 lg:px-6 lg:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">O</span>
                </div>
                <div>
                  <h1 className="text-lg lg:text-xl font-medium text-gray-900">Order #123456</h1>
                  <div className="hidden sm:flex items-center gap-3 text-xs lg:text-sm text-gray-600">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">Draft</span>
                    <span>ABC Corporation</span>
                    <span>2/24/2020</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="hidden lg:block text-xs text-gray-500">Last updated Jan 24, 19:43 PM</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="hidden sm:flex text-gray-700 border-gray-300 hover:bg-gray-50">
                  Cancel
                </Button>
                <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                  Save
                </Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Submit
                </Button>
              </div>
            </div>
          </div>
          
          {/* Mobile Status Info */}
          <div className="sm:hidden mt-2 flex items-center gap-3 text-xs text-gray-600">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">Draft</span>
            <span>ABC Corporation</span>
            <span>2/24/2020</span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg">
            <div className="p-4 border-b">
              <h2 className="text-lg font-medium text-gray-900">Navigation</h2>
            </div>
            <nav className="p-4">
              <ul className="space-y-2">
                <li><a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Orders</a></li>
                <li><a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Customers</a></li>
                <li><a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Products</a></li>
                <li><a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Reports</a></li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      <div className="px-4 py-6 lg:px-6 max-w-7xl mx-auto">
        {/* Customer Information Section */}
        <Card className="mb-6 shadow-sm border-gray-200">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Customer Information</h2>
              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <Label className="text-sm font-medium text-gray-700">Customer Name *</Label>
                <Select value={orderData.customerName}>
                  <SelectTrigger className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200">
                    <SelectItem value="ABC Corporation">ABC Corporation</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-xs text-red-600 mt-1">Required</span>
              </div>
              
              <div>
                <Label className="text-sm font-medium text-gray-700">Customer Number</Label>
                <Input 
                  value={orderData.customerNumber}
                  className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-gray-50"
                  readOnly
                />
              </div>
              
              <div>
                <Label className="text-sm font-medium text-gray-700">Customer Email</Label>
                <div className="mt-1 text-blue-600 text-sm font-medium">
                  {orderData.customerEmail}
                </div>
              </div>
              
              <div>
                <Label className="text-sm font-medium text-gray-700">Currency</Label>
                <Select value={orderData.currency}>
                  <SelectTrigger className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200">
                    <SelectItem value="CAD">CAD</SelectItem>
                    <SelectItem value="USD">USD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <Label className="text-sm font-medium text-gray-700">Shipping Address</Label>
                <div className="mt-1 p-3 bg-gray-50 rounded-md border border-gray-200 text-sm text-gray-800 whitespace-pre-line">
                  {orderData.shippingAddress}
                </div>
              </div>
              
              <div>
                <Label className="text-sm font-medium text-gray-700">Shipping Method</Label>
                <Select value={orderData.shippingMethod}>
                  <SelectTrigger className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200">
                    <SelectItem value="Standard">Standard</SelectItem>
                    <SelectItem value="Express">Express</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-sm font-medium text-gray-700">Shipping Cost</Label>
                <div className="mt-1 p-3 bg-gray-50 rounded-md border border-gray-200 text-sm font-medium text-gray-800">
                  {orderData.shippingCost}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Lines Section */}
        <Card className="mb-6 shadow-sm border-gray-200">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Order Lines</h2>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="h-4 w-4 mr-1" />
                Add Line
              </Button>
            </div>
            
            {/* Mobile Cards View */}
            <div className="lg:hidden space-y-4">
              {orderLines.map((line, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 text-sm">{line.product}</h3>
                      <p className="text-xs text-blue-600 mt-1">{line.productNumber}</p>
                    </div>
                    <div className="flex gap-1 ml-2">
                      <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                        <Edit className="h-4 w-4 text-gray-500" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-600">List Price:</span>
                      <p className="font-medium">{line.listPrice}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Quantity:</span>
                      <p className="font-medium">{line.quantity}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-600">Amount:</span>
                      <p className="font-semibold text-gray-900">{line.amount}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-sm font-medium text-gray-700">Product</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-700">Product Number</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-700">Image</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-700">List Price</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-700">Quantity</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-700">Amount</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orderLines.map((line, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 text-sm text-gray-900">{line.product}</td>
                      <td className="py-4 text-sm text-blue-600 font-medium">{line.productNumber}</td>
                      <td className="py-4">
                        <div className="w-10 h-8 bg-gray-200 rounded border border-gray-300 flex items-center justify-center">
                          <div className="w-6 h-4 bg-gray-400 rounded"></div>
                        </div>
                      </td>
                      <td className="py-4 text-sm text-gray-900">{line.listPrice}</td>
                      <td className="py-4 text-sm text-gray-900">{line.quantity}</td>
                      <td className="py-4 text-sm font-semibold text-gray-900">{line.amount}</td>
                      <td className="py-4">
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm" className="p-1 h-8 w-8 hover:bg-blue-50">
                            <Edit className="h-4 w-4 text-gray-500 hover:text-blue-600" />
                          </Button>
                          <Button variant="ghost" size="sm" className="p-1 h-8 w-8 hover:bg-red-50">
                            <Trash2 className="h-4 w-4 text-gray-500 hover:text-red-600" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <Label className="text-sm font-medium text-gray-700">Comments</Label>
              <Textarea 
                className="mt-1 min-h-[80px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Add your comments here..."
                value={orderData.comments}
                onChange={(e) => setOrderData({...orderData, comments: e.target.value})}
              />
            </div>
          </CardContent>
        </Card>

        {/* Attachment Section */}
        <Card className="mb-20 lg:mb-6 shadow-sm border-gray-200">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Attachments</h2>
              <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                <Upload className="h-4 w-4 mr-1" />
                Upload
              </Button>
            </div>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 lg:p-8 text-center hover:border-blue-400 transition-colors">
              <div className="text-3xl lg:text-4xl text-gray-400 mb-2">+</div>
              <div className="text-sm font-medium text-gray-700 mb-1">Drag and Drop</div>
              <div className="text-xs text-gray-500">Select a file or drop one here.</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Bottom Actions - Fixed */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden shadow-lg">
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 text-gray-700 border-gray-300">
            Cancel
          </Button>
          <Button variant="outline" className="flex-1 text-blue-600 border-blue-200 hover:bg-blue-50">
            Save
          </Button>
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;

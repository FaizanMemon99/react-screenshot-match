import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Trash2, Home, ShoppingCart, Package, GraduationCap, BarChart3, MessageCircle, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import RedwoodHeader from '../images/redwood-header-stripe-only.webp'
import Image from "../images/c1bce6af-9b42-42aa-b440-e72061f5e52a.png"; // Example image import
const Index = () => {
  const [orderData, setOrderData] = useState({
    customerName: "ABC Corporation",
    customerNumber: "54728954923754890",
    customerEmail: "example@abccorp.com",
    currency: "CAD",
    shippingAddress: "331 Pudding Street\n1500419\nFusion City, ON 93295\nCanada",
    shippingMethod: "Standard",
    shippingCost: "1,500.00 CAD",
    comments: ""
  });

  const orderLines = [
    {
      product: "Macbook Pro 15'' 2019",
      productNumber: "54728954923754890",
      listPrice: "3,000.00 CAD",
      quantity: 5,
      amount: "15,000.00 CAD",
      image: Image
    },
    {
      product: "Macbook Pro 15'' 2019",
      productNumber: "54728954923754890",
      listPrice: "3,000.00 CAD",
      quantity: 5,
      amount: "15,000.00 CAD",
      image: Image
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-10 py-2 h-full"
      style={{
        margin: '0',
        backgroundColor: '#E5E4E4',
        backgroundImage: 'repeating-conic-gradient(rgba(0,0,0,0.05) 0 1deg, transparent 1deg 2deg)',
        backgroundSize: '64px 64px',
        backgroundPosition: '0 0, 0 0',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Content */}
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="top-0 left-0 right-0 z-50 bg-[#36677d] px-4 md:px-6 pt-4 rounded-xl shadow-xl">
          <div className="flex items-center justify-between pb-2">
            <div className="flex-1 min-w-0">
              <h1 className="text-lg md:text-xl font-medium text-white truncate">Order #123456</h1>
              <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm mt-1 flex-wrap text-white">
                <span className="bg-[#16425B] px-2 py-1 rounded text-xs">Draft</span>
                <span className="truncate">ABC Corporation</span>
                <span className="whitespace-nowrap">2/24/2020</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden md:block text-xs text-white mr-4">Last updated on Jan&nbsp;24, 12:43&nbsp;PM</span>
              <div className="hidden md:flex items-center gap-2">
                <Button variant="ghost" className="text-white hover:bg-[#16425B] text-sm">
                  Cancel
                </Button>
                <Button variant="ghost" className="text-white hover:bg-[#16425B] text-sm">
                  Save
                </Button>
                <Button className="bg-white text-[#1F4E79] hover:bg-gray-100 text-sm">
                  Submit
                </Button>
              </div>
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
                    <Button className="w-full bg-[#1F4E79] hover:bg-[#16425B] text-white">Submit</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <div className='md:mx-[-1.5rem] mx-[-1rem] bg-left-bottom bg-repeat-x h-[12px]' style={{
            backgroundImage: `url(${RedwoodHeader})`,
            backgroundSize: '50rem'
          }}>
          </div>
        </div>
        {/* Customer Info */}

        <div className="bg-white shadow-sm pb-[4rem] h-[75vh] md:h-[74vh] lg:h-[82vh] overflow-x-auto rounded-b-xl">
          <div className="px-4 py-3">
            <h2 className="text-xl font-bold text-gray-900">Customer information</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
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
                <span className="text-xs text-red-500 mt-1 block text-right">Required</span>
              </div>
              <div>
                <Label className="text-sm text-gray-700 mb-2 block">Customer Number</Label>
                <div className="text-gray-600 text-sm break-all">{orderData.customerNumber}</div>
              </div>
              <div>
                <Label className="text-sm text-gray-700 mb-2 block">Customer Email</Label>
                <div className="text-blue-600 text-sm break-all">{orderData.customerEmail}</div>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <Label className="text-sm text-gray-700 mb-1 block">Shipping Address</Label>
                <div className="p-1  pt-0 text-sm whitespace-pre-line">{orderData.shippingAddress}</div>
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
                <div className="text-sm font-medium text-gray-900">{orderData.shippingCost}</div>
              </div>
            </div>
          </div>


          {/* Order Lines */}
          <div className="px-4 py-3 pb-8">
            <h2 className="text-xl font-bold text-gray-900">Order Lines</h2>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mx-10">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {['Product', 'Product Number', 'Product Image', 'List Price', 'Quantity', 'Amount', 'Action'].map(header => (
                    <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-700 tracking-wider">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orderLines.map((line, i) => (
                  <tr key={i} className="hover:bg-gray-50 font-semibold">
                    <td className="px-6 py-4 text-sm text-gray-900">{line.product}</td>
                    <td className="px-6 py-4 text-sm text-[#2d83a1]">{line.productNumber}</td>
                    <td className="px-6 py-4">
                      <img src={line.image} alt={line.product} className="h-8 w-10 object-cover rounded" />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{line.listPrice}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{line.quantity}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{line.amount}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                          <Edit className="h-4 w-4 text-black-600" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                          <Trash2 className="h-4 w-4 text-black-600" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden">
            {orderLines.map((line, i) => (
              <div key={i} className="p-4 border-b border-gray-200 last:border-b-0 font-semibold">
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

          <div className="p-6 mt-2">
            {/* <Label className="text-sm text-gray-700 mb-2 block">Comments</Label> */}
            <Textarea
              className="min-h-[80px] resize-none text-sm w-[80%] md:w-[40%]"
              placeholder="Comments"
              value={orderData.comments}
              onChange={e => setOrderData({ ...orderData, comments: e.target.value })}
            />
          </div>


          {/* Attachment */}
          <div className="px-4 py-3">
            <h2 className="text-xl font-bold text-gray-900">Attachment</h2>
          </div>
          <div className="px-6 mb-2">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors w-[80%] md:w-[40%] flex align-center justify-between cursor-pointer">
              <div className='flex-item'>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Drag and Drop</h2>
                <div className="text-xs text-gray-500">Select a file or drop one here.</div>
              </div>
              <div className="text-4xl text-black-600 mb-2">+</div>
            </div>
          </div>
        </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 shadow-lg rounded-b-xl bg-[#f1efed]">
        <div className="flex items-center justify-between">
          <div className="flex items-center overflow-x-auto">
            <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer whitespace-nowrap  px-4 md:px-6 py-3 border-t-[3px] border-black">
              <Home className="h-5 w-5" />
              <span className="text-sm">Home</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer whitespace-nowrap  px-4 md:px-6 py-3 hover:border-t-[2px]">
              <ShoppingCart className="h-5 w-5" />
              <span className="text-sm">Orders</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer whitespace-nowrap  px-4 md:px-6 py-3 hover:border-t-[2px]">
              <Package className="h-5 w-5" />
              <span className="text-sm">Inventory</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer whitespace-nowrap  px-4 md:px-6 py-3 hover:border-t-[2px]">
              <GraduationCap className="h-5 w-5" />
              <span className="text-sm">Training</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer whitespace-nowrap px-4 md:px-6 py-3 hover:border-t-[2px]">
              <BarChart3 className="h-5 w-5" />
              <span className="text-sm">Analytics</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Index;

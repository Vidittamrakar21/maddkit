import { LogOut, ShoppingCart, Truck, Gift, Store ,HeadphonesIcon , BoxIcon , PhoneCall ,CakeIcon , LogIn ,User, PartyPopper ,ChevronRight} from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Account() {

  const [user, setUser] = useState('');

  async function fetchUser (){
    const id = localStorage.getItem('id')
    if(id){

      const data = await (await axios.get(`https://maddkit.com/wp-json/wc/v3/customers/${id}?consumer_key=ck_093af7accbe95ac38eadfed5c75e3e9b3baa82e6&consumer_secret=cs_97b91a6da87365fe251f05434dba14a10c02a009`)).data;
      setUser(data);
    }
    else{
      window.location.href = '/login?redirects=account'
    }
  }

  useEffect(()=>{
    fetchUser();
  },[])

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 font-sans  mt-[60px] sm:mt-[113px] select-none">
      {/* Header */}
      <div className="mb-6">
        <h1 className={user?.shipping?.first_name?"text-2xl font-bold":"hidden"}>{user?.shipping?.first_name + " " + user?.shipping?.last_name}</h1>
        <p className={user?.shipping?.phone?"text-gray-600 text-base flex items-center justify-start mt-3":"hidden"}><PhoneCall size={18} />&nbsp; {user?.shipping?.phone}</p>
        {/* <p className="text-gray-600 text-base flex items-center justify-start"><CakeIcon size={18} />&nbsp; 21 Jan 1999</p> */}
      </div>

      {/* Top Actions */}
      <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 mb-6">
       
        <button onClick={()=>{window.location.href = '/orders'}} className=" p-4 rounded-lg text-center text-sm sm:text-base flex items-center justify-center flex-col">
        <BoxIcon size={18} />Orders
        </button>
        <button onClick={()=>{window.location.href = '/rewards'}} className=" p-4 rounded-lg text-center text-sm sm:text-base flex items-center justify-center flex-col">
        <Gift size={18} /> Rewards
        </button>
        <button className=" p-4 rounded-lg text-center text-sm sm:text-base flex items-center justify-center flex-col">
        <HeadphonesIcon size={18} />Support
        </button>
        
      </div>

      {/* App Update */}
      <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6 flex justify-between items-center">
        <span className="text-sm sm:text-base">Refer & Earn 50 Coins!</span>
        <span className="bg-black text-white px-3 py-1 text-sm rounded">Refer</span>
      </div>

      {/* Appearance Selector */}
      <div className="mb-8 flex items-center justify-between border p-4 rounded-lg">
        <span className="text-sm sm:text-base flex items-center justify-start"> <PartyPopper size={18} />&nbsp;Explore Decor Hacks For Party!</span>
        <span className="bg-gray-200 px-3 py-1 text-sm rounded">Explore</span>
      </div>

      {/* Bottom Section */}
      <div className="space-y-6">
        <div>
          <h2 className="text-sm font-semibold text-gray-700 uppercase">Your Options</h2>
          <div className="mt-2 space-y-3">
            <Option icon={<User size={18} />} nxt={'profile'} label="My Profile" />
            <Option icon={<Truck size={18} />} nxt={'trackorder'} label="Track Order" />
            <Option icon={<Gift size={18} />} nxt={'rewards'} label="Rewards" />
            <Option icon={<Store size={18} />} nxt={'allproducts'} label="Shop" />
            <Option icon={<LogOut size={18} />} nxt={'out'} label="Logout" color="text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Option({ icon, label, color = "text-gray-800" , nxt}) {
  return (
    <div
    onClick={()=>{if(nxt ==='out' ){localStorage.clear();  window.location.href = `/`} else{ window.location.href = `/${nxt}`}}}
      className={`flex items-center justify-between px-3 py-3 rounded hover:bg-gray-100 cursor-pointer ${color}`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm sm:text-base">{label}</span>
      </div>
     <ChevronRight className='text-black' size={19}/>
    </div>
  );
}

import React, { useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { FaBirthdayCake, FaBaby, FaHeart, FaHome, FaGraduationCap, FaUser, FaUsers, FaUserFriends, FaUserTie, FaQuestion } from 'react-icons/fa';

const questions = ["occasion", "names", "date", "guests", "gender", "relation"];

const QuizCard = ({state, updatestate}) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [date, setDate] = useState();
  const [start, setStart] = useState(false);
  const [active, setActive] = useState('');

  const nextStep = () => setStep((prev) => Math.min(prev + 1, questions.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const renderQuestion = () => {
    switch (questions[step]) {
      case "occasion":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Let’s make someone feel super special. What’s the occasion?</h2>
            <div className="grid grid-cols-2 gap-3">
              {["Happy Birthday", "Bride-to-Be", "Baby Shower", "Happy Anniversary", "House Party", "Welcome Baby", "Graduation"].map((option) => (
                <button
                  key={option}
                  className={`flex items-center  justify-center gap-2  p-2 rounded border ${active === option?'bg-[#ffe7e7] border-[3px] border-black  font-[600]':''} text-black`}
                  onClick={() => {handleChange("occasion", option); setActive(option)}}
                >
                  {getIcon(option)}
                  {option}
                </button>
              ))}
              <Input
                placeholder="Other..."
                onChange={(e) => handleChange("occasion", e.target.value)}
              />
            </div>
          </div>
        );
      case "names":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Tell us who we’re celebrating — their name will be sprinkled across your kit wherever we can!</h2>
            {formData.occasion === "Happy Anniversary" ? (
              <>
                <Input placeholder="Partner 1 Name" onChange={(e) => handleChange("partner1", e.target.value)} />
                <Input placeholder="Partner 2 Name" onChange={(e) => handleChange("partner2", e.target.value)} />
              </>
            ) : (
              <Input placeholder="Name" onChange={(e) => handleChange("name", e.target.value)} />
            )}
          </div>
        );
      case "date":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">📅 So we can help you plan just right.</h2>
            <Calendar mode="single" selected={date} onSelect={setDate} />
            <Input type="time" placeholder="Optional Time" onChange={(e) => handleChange("time", e.target.value)} />
          </div>
        );
      case "guests":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Just you two? Or is the whole gang coming?</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "1–5 (Intimate vibe)", icon: <img src="/single-person.png" className='h-[30px] w-[30px]' alt="" /> },
                { label: "6–15 (Close circle)", icon: <img src="/celebrating.png" className='h-[30px] w-[30px]' alt="" /> },
                { label: "15–30 (Party people)", icon: <img src="/team.png" className='h-[30px] w-[30px]' alt="" /> },
                { label: "30+ (It’s a bash!)", icon: <img src="/diversity.png" className='h-[30px] w-[30px]' alt="" /> },
              ].map(({ label, icon }) => (
                <button
                  key={label}
                  className={`flex items-center  justify-center gap-2  p-2 rounded border ${active === label?'bg-[#ffe7e7] border-[3px] border-black  font-[600]':''} text-black`}
                  onClick={() => {handleChange("guests", label); setActive(label)}}
                >
                  {icon} {label}
                </button>
              ))}
            </div>
          </div>
        );
      case "gender":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Just so we can recommend the right colors, designs and messages</h2>
            <div className="grid grid-cols-3 gap-3">
              {[{label:"Female", icon: <img src="/woman.png" className='h-[30px] w-[30px]' alt="" />  }, {label:"Male", icon: <img src="/man.png" className='h-[30px] w-[30px]' alt="" /> }, {label:"Other" ,icon: <img src="/genders.png" className='h-[30px] w-[30px]' alt="" /> }].map((item) => (
                <button
                  key={item.label}
                  className={`flex sm:flex-row flex-col items-center  justify-center gap-2  p-2 rounded border ${active === item.label?'bg-[#ffe7e7] border-[3px] border-black  font-[600]':''} text-black`}
                  onClick={() => {handleChange("gender", item.label); setActive(item.label)}}
                >
                  {item.icon}{item.label}
                </button>
              ))}
            </div>
          </div>
        );
      case "relation":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">🌟 Let’s make this feel personal. You are their…</h2>
            <div className="grid grid-cols-2 gap-3">
              {[{label:"Mom / Dad", icon: <img src="/parents.png" className='h-[30px] w-[30px]' alt="" /> },
               {label:"Best Friend", icon: <img src="/friends.png" className='h-[30px] w-[30px]' alt="" /> },
                {label:"Partner", icon: <img src="/couple.png" className='h-[30px] w-[30px]' alt="" /> },
                 {label:"Sibling", icon: <img src="/siblings.png" className='h-[30px] w-[30px]' alt="" /> },
                  {label:"Teacher / Mentor", icon: <img src="/teacher.png" className='h-[30px] w-[30px]' alt="" /> },
                  { label:"Kid", icon: <img src="/boy.png" className='h-[30px] w-[30px]' alt="" /> }, 
                   {label:"Colleague", icon: <img src="/colleagues.png" className='h-[30px] w-[30px]' alt="" /> }]
                   .map((rel) => (
                <button
                  key={rel}
                  className={`flex sm:flex-row flex-col items-center  justify-start gap-2  p-2 rounded border ${active === rel.label?'bg-[#ffe7e7] border-[3px] border-black  font-[600]':''} text-black`}
                  onClick={() => {handleChange("relation", rel.label);setActive(rel.label)}}
                >
                  {rel.icon}{rel.label}
                </button>
              ))}
              <Input
                placeholder="Other..."
                onChange={(e) => handleChange("relation", e.target.value)}
              />
            </div>
          </div>
        );
    }
  };

  const getIcon = (text) => {
    switch (text) {
      case "Happy Birthday": return <img src="/birthday-cake.png" className='h-[30px] w-[30px]' alt="" />;
      case "Baby Shower": return <img src="/baby-shower (1).png" className='h-[30px] w-[30px]' alt="" />;
      case "Bride-to-Be": return  <img src="/bride.png" className='h-[30px] w-[30px]' alt="" />;
      case "Happy Anniversary": return <img src="/party.png" className='h-[30px] w-[30px]' alt="" />;
      case "House Party": return <img src="/christmas-music.png" className='h-[30px] w-[30px]' alt="" />;
      case "Welcome Baby": return <img src="/baby-shower.png" className='h-[30px] w-[30px]' alt="" />;
      case "Graduation": return <img src="/graduation-hat.png" className='h-[30px] w-[30px]' alt="" />;
      default: return <FaQuestion />;
    }
  };

  return (<>
        {state === true ? 
            <div className="min-h-screen select-none w-[100%] fixed   flex items-start justify-center bg-[#3b3b3b69] backdrop-blur-sm z-50 px-4">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xl space-y-4 relative top-[40px] ">
              
               {start === false?
               <>
                <h2 className="text-xl font-semibold">Hey..</h2>
              <h2 className="text-lg ">We have few questions for you so that, we can take you to the right product, you are exactly looking for. </h2>
              <div className="flex justify-evenly">
               <button onClick={updatestate}  className=" w-[48%] h-[40px] text-black rounded-lg border-[3px] border-black text-[18px] font-[600] shadow-md">Later</button>
               <button onClick={()=>setStart(true)} className=" w-[48%] h-[40px] rounded-lg bg-[#f4ff53] hover:bg-[#f5ff68]  text-black  border-[3px] border-black text-[18px] font-[600] shadow-md">Let's Proceed</button>
              </div> 
               </>:
               <>
                 <Progress value={((step + 1) / questions.length) * 100} />
              <p className="text-sm text-gray-500"> {step === 0?"Kindly Select Options Accordingly": step === 5?'Almost done!':`You're ${Math.round(((step + 1) / questions.length) * 100)}% there!`}</p>
              {renderQuestion()}
              <div className="flex justify-between">
                {step > 0 && <button onClick={prevStep}  className=" w-[48%] h-[40px] text-black rounded-lg border-[3px] border-black text-[18px] font-[600] shadow-md">Back</button>}
                {step < questions.length - 1? <button onClick={nextStep} className=" w-[48%] h-[40px] rounded-lg bg-[#f4ff53] hover:bg-[#f5ff68]  text-black  border-[3px] border-black text-[18px] font-[600] shadow-md">Next</button>: <button onClick={()=>{setStart(false); updatestate()}} className=" w-[48%] h-[40px] rounded-lg bg-[#f4ff53] hover:bg-[#f5ff68]  text-black  border-[3px] border-black text-[18px] font-[600] shadow-md">Done!</button>}
              </div>
               </>}   
            
            </div>
          </div> 
          :<></>
      
        }
    </>
    );
};

export default QuizCard;

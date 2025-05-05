import React from 'react';
 import { Circle, ArrowRight, Square, Triangle } from 'lucide-react';
 import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
 } from "@/components/ui/tooltip";
 
 const ProcessStepsHeader: React.FC = () => {
   return (
     <div className="mb-2 bg-muted/70 rounded-lg">
       <table className="w-full">
         <thead>
           <tr>
             <th className="py-2 px-3 w-12 text-left text-xs font-medium text-gray-500 border-r border-gray-200">
               Step #
             </th>
             <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 border-r border-gray-200">
               Step Description
             </th>
             <th className="py-2 px-3 w-24 text-center text-xs font-medium text-gray-500 border-r border-gray-200">
               Time (sec)
             </th>
             <th className="py-2 px-3 w-24 text-center text-xs font-medium text-gray-500 border-r border-gray-200">
               Distance (meters)
             </th>
             <th className="py-2 px-3 w-10 text-center text-xs font-medium text-gray-500 bg-cyan-50">
             <Tooltip>
                 <TooltipTrigger className="flex justify-center w-full">
                   <Circle className="h-4 w-4" />
                 </TooltipTrigger>
                 <TooltipContent>
                   <p>Operation: represents a process to be performed (drilling, cutting, casting etc.)</p>
                 </TooltipContent>
               </Tooltip>
             </th>
             <th className="py-2 px-3 w-10 text-center text-xs font-medium text-gray-500 bg-green-50">
             <Tooltip>
                 <TooltipTrigger className="flex justify-center w-full">
                   <ArrowRight className="h-4 w-4" />
                 </TooltipTrigger>
                 <TooltipContent>
                   <p>Transportation: Process/material flow or movement</p>
                 </TooltipContent>
               </Tooltip>
             </th>
             <th className="py-2 px-3 w-10 text-center text-xs font-medium text-gray-500 bg-purple-50">
             <Tooltip>
                 <TooltipTrigger className="flex justify-center w-full">
                   <Square className="h-4 w-4" />
                 </TooltipTrigger>
                 <TooltipContent>
                   <p>Inspection: Represents inspection to be performed on material/process</p>
                 </TooltipContent>
               </Tooltip>
             </th>
             <th className="py-2 px-3 w-10 text-center text-xs font-medium text-gray-500 bg-pink-50">
             <Tooltip>
                 <TooltipTrigger className="flex justify-center w-full">
                   <span className="text-xs font-medium">D</span>
                 </TooltipTrigger>
                 <TooltipContent>
                   <p>Delay: Temporary wait/hold of material or process</p>
                 </TooltipContent>
               </Tooltip>
             </th>
             <th className="py-2 px-3 w-10 text-center text-xs font-medium text-gray-500 bg-yellow-50">
             <Tooltip>
                 <TooltipTrigger className="flex justify-center w-full">
                   <Triangle className="h-4 w-4 rotate-180" />
                 </TooltipTrigger>
                 <TooltipContent>
                   <span><p>Storage: Storage of material</p><br/>(Warehousing, containment)</span>
                 </TooltipContent>
               </Tooltip>
             </th>
             <th className="py-2 px-3 w-24 text-center text-xs font-medium text-gray-500">
               Value Category
             </th>
           </tr>
         </thead>
       </table>
     </div>
   );
 };
 
 export default ProcessStepsHeader;
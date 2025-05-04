
import React from 'react';
import { Circle, ArrowRight, Square, Triangle } from 'lucide-react';

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
              <div className="flex justify-center">
                <Circle className="h-4 w-4" />
              </div>
            </th>
            <th className="py-2 px-3 w-10 text-center text-xs font-medium text-gray-500 bg-green-50">
              <div className="flex justify-center">
                <ArrowRight className="h-4 w-4" />
              </div>
            </th>
            <th className="py-2 px-3 w-10 text-center text-xs font-medium text-gray-500 bg-purple-50">
              <div className="flex justify-center">
                <Square className="h-4 w-4" />
              </div>
            </th>
            <th className="py-2 px-3 w-10 text-center text-xs font-medium text-gray-500 bg-pink-50">
              <div className="flex justify-center">
                <span className="text-xs font-medium">D</span>
              </div>
            </th>
            <th className="py-2 px-3 w-10 text-center text-xs font-medium text-gray-500 bg-yellow-50">
              <div className="flex justify-center">
                <Triangle className="h-4 w-4 rotate-180" />
              </div>
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

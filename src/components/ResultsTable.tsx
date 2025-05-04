
import React from 'react';
import { ChartResults } from '@/utils/processTypes';
import { formatPercentage, formatTime } from '@/utils/calculations';
import { Circle, ArrowRight, Square, Triangle } from 'lucide-react';

interface ResultsTableProps {
  results: ChartResults | null;
}

const ResultsTable: React.FC<ResultsTableProps> = ({ results }) => {
  if (!results) return null;

  return (
    <div className="animate-fade-in bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <div className="p-4 border-b border-gray-100">
        <h3 className="font-medium text-lg">Process Results</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-px bg-gray-100">
        <div className="bg-white p-4">
          <div className="text-sm font-medium text-muted-foreground mb-1">Total VA's</div>
          <div className="text-2xl font-semibold">{results.totalVA}</div>
        </div>
        <div className="bg-white p-4">
          <div className="text-sm font-medium text-muted-foreground mb-1">Total NVA's</div>
          <div className="text-2xl font-semibold">{results.totalNVA}</div>
        </div>
        
        <div className="bg-white p-4">
          <div className="text-sm font-medium text-muted-foreground mb-1">VA's time</div>
          <div className="text-2xl font-semibold">{formatTime(results.vaTime)}</div>
        </div>
        <div className="bg-white p-4">
          <div className="text-sm font-medium text-muted-foreground mb-1">NVA's time</div>
          <div className="text-2xl font-semibold">{formatTime(results.nvaTime)}</div>
        </div>
        
        <div className="bg-white p-4">
          <div className="text-sm font-medium text-muted-foreground mb-1">VA's time percentage</div>
          <div className="text-2xl font-semibold text-green-600">{formatPercentage(results.vaTimePercentage)}</div>
        </div>
        <div className="bg-white p-4">
          <div className="text-sm font-medium text-muted-foreground mb-1">NVA's time percentage</div>
          <div className="text-2xl font-semibold text-amber-500">{formatPercentage(results.nvaTimePercentage)}</div>
        </div>

        <div className="bg-white p-4">
          <div className="text-sm font-medium text-muted-foreground mb-1">Total Time</div>
          <div className="text-2xl font-semibold">{formatTime(results.leadTime)}</div>
        </div>
        
        <div className="bg-white p-4">
          <div className="text-sm font-medium text-muted-foreground mb-1">Distance Travelled</div>
          <div className="text-2xl font-semibold">{results.totalDistance} m</div>
        </div>
      </div>
      
      <div className="p-4 bg-gray-50 border-t">
        <div className="text-sm font-medium text-muted-foreground mb-3">Process Type Distribution</div>
        <div className="grid grid-cols-5 gap-2">
          <div className="flex flex-col items-center p-2 bg-white rounded-md border border-gray-100">
            <Circle className="h-5 w-5 mb-1 text-gray-600" />
            <div className="text-xs text-muted-foreground">Operation</div>
            <div className="font-semibold">{results.typeCount.operation}</div>
          </div>
          <div className="flex flex-col items-center p-2 bg-white rounded-md border border-gray-100">
            <ArrowRight className="h-5 w-5 mb-1 text-gray-600" />
            <div className="text-xs text-muted-foreground">Transport</div>
            <div className="font-semibold">{results.typeCount.transport}</div>
          </div>
          <div className="flex flex-col items-center p-2 bg-white rounded-md border border-gray-100">
            <Square className="h-5 w-5 mb-1 text-gray-600" />
            <div className="text-xs text-muted-foreground">Inspection</div>
            <div className="font-semibold">{results.typeCount.inspection}</div>
          </div>
          <div className="flex flex-col items-center p-2 bg-white rounded-md border border-gray-100">
            <div className="h-5 w-5 flex items-center justify-center mb-1">
              <span className="text-base text-gray-600">D</span>
            </div>
            <div className="text-xs text-muted-foreground">Delay</div>
            <div className="font-semibold">{results.typeCount.delay}</div>
          </div>
          <div className="flex flex-col items-center p-2 bg-white rounded-md border border-gray-100">
            <Triangle className="h-5 w-5 mb-1 text-gray-600 rotate-180" />
            <div className="text-xs text-muted-foreground">Storage</div>
            <div className="font-semibold">{results.typeCount.storage}</div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-gray-50 border-t">
        <div className="text-sm font-medium text-muted-foreground mb-3">Process Type Distribution by Value Category</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-3 rounded-md border border-gray-100">
            <div className="text-sm font-medium text-green-600 mb-2">Value Added</div>
            <div className="grid grid-cols-5 gap-2">
              {Object.entries(results.valueAddedTypeCount).map(([type, count]) => (
                <div key={`va-${type}`} className="flex flex-col items-center">
                  <div className="text-xs text-muted-foreground capitalize">{type}</div>
                  <div className="font-semibold text-sm">{count}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-3 rounded-md border border-gray-100">
            <div className="text-sm font-medium text-amber-500 mb-2">Non-Value Added</div>
            <div className="grid grid-cols-5 gap-2">
              {Object.entries(results.nonValueAddedTypeCount).map(([type, count]) => (
                <div key={`nva-${type}`} className="flex flex-col items-center">
                  <div className="text-xs text-muted-foreground capitalize">{type}</div>
                  <div className="font-semibold text-sm">{count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsTable;

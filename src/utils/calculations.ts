
import { ProcessChart, ChartResults, ProcessStep, ProcessType } from './processTypes';

export const calculateResults = (chart: ProcessChart): ChartResults => {
  // Filter steps for VA and NVA
  const vaSteps = chart.steps.filter(step => step.valueAdded);
  const nvaSteps = chart.steps.filter(step => !step.valueAdded);
  
  // Calculate times - time is already in seconds from the form input
  const vaTime = vaSteps.reduce((total, step) => total + (step.time || 0), 0);
  const nvaTime = nvaSteps.reduce((total, step) => total + (step.time || 0), 0);
  const totalTime = vaTime + nvaTime;
  
  // Calculate VA and NVA time percentages
  const vaTimePercentage = totalTime > 0 ? (vaTime / totalTime) * 100 : 0;
  const nvaTimePercentage = totalTime > 0 ? (nvaTime / totalTime) * 100 : 0;
  
  // Calculate total distance
  const totalDistance = chart.steps.reduce((total, step) => total + (step.distance || 0), 0);
  
  // Count steps by type
  const typeCount = chart.steps.reduce((counts, step) => {
    counts[step.type] = (counts[step.type] || 0) + 1;
    return counts;
  }, {} as Record<ProcessType, number>);
  
  // Ensure all process types have counts
  const allProcessTypes: ProcessType[] = ['operation', 'transport', 'inspection', 'delay', 'storage'];
  allProcessTypes.forEach(type => {
    if (!typeCount[type]) typeCount[type] = 0;
  });
  
  // Calculate process type counts for VA and NVA steps
  const valueAddedTypeCount: Record<ProcessType, number> = {} as Record<ProcessType, number>;
  const nonValueAddedTypeCount: Record<ProcessType, number> = {} as Record<ProcessType, number>;
  
  // Initialize counts
  allProcessTypes.forEach(type => {
    valueAddedTypeCount[type] = 0;
    nonValueAddedTypeCount[type] = 0;
  });
  
  // Count VA by type
  vaSteps.forEach(step => {
    valueAddedTypeCount[step.type] = (valueAddedTypeCount[step.type] || 0) + 1;
  });
  
  // Count NVA by type
  nvaSteps.forEach(step => {
    nonValueAddedTypeCount[step.type] = (nonValueAddedTypeCount[step.type] || 0) + 1;
  });
  
  return {
    totalVA: vaSteps.length,
    totalNVA: nvaSteps.length,
    vaTime,
    nvaTime,
    vaTimePercentage,
    nvaTimePercentage,
    totalDistance,
    leadTime: totalTime,
    typeCount,
    valueAddedTypeCount,
    nonValueAddedTypeCount
  };
};

export const formatTime = (seconds: number): string => {
  // Display time in seconds directly
  return `${seconds} sec`;
};

export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

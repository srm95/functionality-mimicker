
import React from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Save, Play } from 'lucide-react';

interface ControlPanelHeaderProps {
  handleDuplicate: () => void;
  handleSaveScenario: () => void;
  handleRunCalculation: () => void;
}

const ControlPanelHeader = ({
  handleDuplicate,
  handleSaveScenario,
  handleRunCalculation
}: ControlPanelHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold">Control Panel</h1>
        <p className="text-muted-foreground">Adjust operational parameters to build different scenarios</p>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="outline" onClick={handleDuplicate} className="flex items-center gap-2">
          <Copy className="h-4 w-4" />
          Duplicate
        </Button>
        <Button variant="outline" onClick={handleSaveScenario} className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Save Scenario
        </Button>
        <Button onClick={handleRunCalculation} className="flex items-center gap-2">
          <Play className="h-4 w-4" />
          Run Calculation
        </Button>
      </div>
    </div>
  );
};

export default ControlPanelHeader;

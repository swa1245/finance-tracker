import CreateAccountDrawer from "@/components/CreateAccountDrawer";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import React from "react";

const DshboardPage = () => {
  return (
    <div className="px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CreateAccountDrawer>
          <Card className="cursor-pointer hover:shadow-sm items-center justify-center">
            <CardContent className="flex flex-col items-center justify-center">
              <Plus className="h-10 w-10 mb-2" />
              <p className="text-gray-600 text-sm">Add new account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>
      </div>
    </div>
  );
};

export default DshboardPage;

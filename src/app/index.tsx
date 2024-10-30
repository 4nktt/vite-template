import { Package } from "lucide-react";

import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Layout from "./layout";
import Provider from "./provider";

function App() {
  return (
    <Provider>
      <Layout>
        <Card className="relative mx-auto mt-20 max-w-md">
          <CardHeader className="items-center">
            <Package width={100} height={100} />
            <CardTitle className="text-5xl">Vite Template</CardTitle>
            <CardDescription>
              Starter template for Vite and React
            </CardDescription>
          </CardHeader>
          <CardFooter className="justify-center">
            <ThemeSwitcher />
          </CardFooter>
        </Card>
      </Layout>
    </Provider>
  );
}

export default App;

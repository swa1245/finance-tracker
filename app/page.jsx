import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/Landing";

export default function Home() {
  return (
    <div className="mt-48">
      <Hero />
      <section className="py-20 mt-20 bg-blue-100">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-14">
            everyone can manage their finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card key={index} className="p-8">
                <CardContent className="space-y-4 pt-4 ">
                  {feature.icon}
                  <h2 className="text-2xl font-semibold">{feature.title}</h2>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-100">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-14">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howItWorksData.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mb-4 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 ">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 ">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-14">
            What our users say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((feature, index) => (
              <Card key={index} className="p-8">
                <CardContent className="space-y-4 pt-4 ">
                  <div className="flex items-center mb-4">
                    <img
                      src={feature.image}
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-4">
                      <h2 className="text-2xl font-semibold">{feature.name}</h2>
                      <p className="text-gray-600">{feature.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{feature.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

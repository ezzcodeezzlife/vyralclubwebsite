import {
  AnnotationIcon,
  DatabaseIcon,
  ClockIcon,
  ChipIcon,
  TranslateIcon,
  CodeIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline"

export default function Features(props: any) {
  const features = [
    {
      name: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut la",
      icon: GlobeAltIcon,
      link: "/generate-function",
    },
    {
      name: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut la",
      icon: CodeIcon,
      link: "/code-to-explanation",
    },
    {
      name: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut la",
      icon: LightningBoltIcon,
      link: "/fix-invalid-code",
    },

  ]

  return (
    <div id="features" className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        {features.map((feature) => (
          <a href={feature.link}>
            <div
              key={feature.name}
              className="relative  hover:bg-slate-100 rounded-md py-2"
            >
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          </a>
        ))}
      </dl>
    </div>
  )
}

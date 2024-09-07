export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(168 85 247)" />
          <stop offset="100%" stopColor="rgb(59 130 246)" />
        </linearGradient>
      </svg>
    </>
  );
};

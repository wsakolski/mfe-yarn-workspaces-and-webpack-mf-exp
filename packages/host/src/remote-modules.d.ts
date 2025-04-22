// We need to let typescript know that thare are remote modules
declare module "mfe1/Widget" {
  const Component: React.ComponentType;
  export default Component;
}

declare module "mfe2/Widget" {
  const Component: React.ComponentType;
  export default Component;
}

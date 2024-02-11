import React from "react";
import ContentLoader from "react-content-loader";

export const PizzaSkeleton = () => (
  <ContentLoader
    speed={2}
    width={250}
    height={490}
    viewBox="0 0 250 490"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="123" cy="123" r="123" />
    <rect x="47" y="274" rx="5" ry="5" width="150" height="29" />
    <rect x="10" y="326" rx="5" ry="5" width="233" height="89" />
    <rect x="14" y="437" rx="5" ry="5" width="79" height="36" />
    <rect x="131" y="436" rx="5" ry="5" width="110" height="36" />
  </ContentLoader>
);

export default PizzaSkeleton;

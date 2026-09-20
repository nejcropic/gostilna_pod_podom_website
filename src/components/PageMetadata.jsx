import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const metadata = {
  "/": {
    title: "Gostišče Pod Podom | Pice in domače jedi",
    description:
      "Gostišče Pod Podom v Kuželjevcu pri Zagradcu ponuja pice, domače jedi in sladice v prijetnem podeželskem ambientu.",
  },
  "/meni": {
    title: "Meni | Gostišče Pod Podom",
    description:
      "Oglejte si ponudbo pic, veganskih pic, domačih jedi, solat in sladic Gostišča Pod Podom.",
  },
  "/gostisce": {
    title: "Gostišče | Pod Podom",
    description:
      "Spoznajte Gostišče Pod Podom, našo krušno peč in prijeten ambient v Kuželjevcu pri Zagradcu.",
  },
  "/okolica": {
    title: "Okolica | Gostišče Pod Podom",
    description:
      "Odkrijte mirno podeželsko okolico Gostišča Pod Podom v Kuželjevcu pri Zagradcu.",
  },
  "/galerija": {
    title: "Galerija | Gostišče Pod Podom",
    description:
      "Fotografije jedi, prostorov in okolice Gostišča Pod Podom.",
  },
};

export default function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = metadata[pathname] || metadata["/"];
    document.title = page.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", page.description);
  }, [pathname]);

  return null;
}

import { MainFmt } from "../components/FormattedText/Fmt";
import Footer from "../components/Footer/Footer";
export default function ChaptersLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <MainFmt>{children}</MainFmt>
      <Footer></Footer>
    </section>
  );
}

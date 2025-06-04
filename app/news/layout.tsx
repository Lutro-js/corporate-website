import Hero from "@/app/_components/Hero";
import Sheet from "../_components/Sheet";

export const metadata = {
    titile: "ニュース",
};

type Props = {
    children: React.ReactNode;
};

export default function NewsLayout({ children }: Props) {
    return (
        <>
            <Hero title="News" sub="ニュース" />
            <Sheet>{children}</Sheet>
        </>
    );
}
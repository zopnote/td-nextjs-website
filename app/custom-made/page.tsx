import Development from "@/app/custom-made/components/development";
import TabBar from "@/lib/tabbar";
import Footer from "@/lib/footer";

export default function CustomMade() {
    return (
        <div>
            <TabBar></TabBar>
            <Development/>
            <Footer/>
        </div>
    );
}
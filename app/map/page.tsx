import TabBar from "@/lib/tabbar";
import Footer from "@/lib/footer";
import Map from "@/app/map/components/map";

export default function MapPage() {
    return (
        <div>
            <TabBar></TabBar>
            <Map></Map>
            <Footer></Footer>
        </div>
    );
}
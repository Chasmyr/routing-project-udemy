import { useRouter } from "next/router"
import EventList from "../../components/events/event-list"
import EventsSearch from "../../components/events/events-search"
import { getAllEvents } from "../../data/dummy-data"

function AllEventsPage() {
    const events = getAllEvents()
    const router = useRouter()

    function findEventHandler(year, month) {
        const fullPath = `/events/${year}/${month}`

        router.push(fullPath)
    }

    return (
        <>
            <EventsSearch onSearch={findEventHandler} />
            <EventList items={events} />
        </>
    )
}

export default AllEventsPage
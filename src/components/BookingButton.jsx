"use client";
import { authClient } from "@/lib/auth-client"
import { Envelope } from "@gravity-ui/icons";
import { bookingData } from "@/lib/action";
import { toast } from "react-hot-toast";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";

const BookingButton = ({ facility }) => {
    const router = useRouter();

    const { _id, name, price_per_hour, image } = facility;
    const { data: session, isPending } = authClient.useSession()
    const user_email = session?.user.email
    const id = session?.user.id

    async function handleBook(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const rawData = Object.fromEntries(formData.entries());
        const bookedData = {
            date: new Date(rawData.date).toLocaleDateString("en-GB", {
            weekday: "long", day: "numeric",month: "short",  year: "numeric" }),
            slot: rawData.slot,
            hours: Number(rawData.hours),
            price: Number(rawData.price),
            image: rawData.image,
            name,
            user_email, 
            id,
            status: 'Pending',
        };
        console.log(bookedData)
        const result = await bookingData(bookedData)
        if (result.success) {
            toast.success(`${name} is booked!`)
            router.push('/myBookings')
            router.refresh()
        }
    }

    return (
        <Modal>
            <Button variant="secondary">Book Now</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Book Facility</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below to complete your booking.
                            </p>
                        </Modal.Header>

                        <form className="flex flex-col gap-4" onSubmit={handleBook}>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    {/* Date */}
                                    <TextField className="w-full" name="date" type="date">
                                        <Label>Date</Label>
                                        <Input placeholder="Select booking date" />
                                    </TextField>

                                    {/* Slot */}
                                    <TextField className="w-full" name="slot" type="text">
                                        <Label>Available Slot</Label>
                                        <Input placeholder="e.g., 08:00 AM - 10:00 AM" />
                                    </TextField>

                                    {/* Hours */}
                                    <TextField className="w-full" name="hours" type="number">
                                        <Label>Total Hours</Label>
                                        <Input placeholder="Enter total hours" />
                                    </TextField>

                                    {/* Price */}
                                    <TextField className="w-full" name="price" type="number" defaultValue={price_per_hour}>
                                        <Label>Total Price ($)</Label>
                                        <Input placeholder="Calculated price" />
                                    </TextField>

                                    {/* Image */}
                                    <TextField className="w-full" name="image" type="url" defaultValue={image}>
                                        <Label>Facility Image</Label>
                                        <Input placeholder="Enter image URL" />
                                    </TextField>
                                </Surface>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button slot="close" variant="secondary">
                                    Cancel
                                </Button>
                                <Button slot="close" type="submit">Confirm Booking</Button>
                            </Modal.Footer>
                        </form>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default BookingButton; 
import createEvent from "@/app/actions/create-event";

const CreateEvent = ({}) => {
  return (
    <div>
      <h2>Create new event</h2>
      <form action={createEvent}>
        <label htmlFor="name-input">Name of event</label>
        <input
          type="text"
          name="name"
          placeholder="Game night"
          id="name-input"
        />

        <label htmlFor="description-input">Description</label>
        <input
          type="text"
          name="description"
          placeholder="Describe your event"
          id="description-input"
        />

        <button type="submit">Add event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
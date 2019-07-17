export const formatTitle = body => {
  let maxLength = 20;
  if (body.length > maxLength) {
    return body.substring(0, maxLength - 3) + "...";
  } else if (body.length === 0) {
    return "New note";
  } else {
    return body;
  }
};

export const formatTimestamp = timestamp => new Date(timestamp).toUTCString();

export const transformNotes = (notes, searchText) =>
  notes
    .slice()
    .sort((firstNote, secondNote) => firstNote.timestamp - secondNote.timestamp)
    .filter(note => note.body.toLowerCase().includes(searchText.toLowerCase()));

import { StackNavigator } from "react-navigation";
import JournalNames from "./components/JournalNames";
import NoteList from "./components/NoteList";
import Note from "./components/Note";

export const JournalApp = StackNavigator({
  Home: { screen: JournalNames },
  NoteList: { screen: NoteList},
  //Note: { screen: Note},
});
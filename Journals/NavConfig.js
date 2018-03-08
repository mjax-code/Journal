import { StackNavigator } from "react-navigation";
import JournalNames from "./components/JournalNames";
import NoteList from "./components/NoteList";
import Note from "./components/Note";

export const JournalApp = StackNavigator({
  Home: { 
    screen: JournalNames,
    navigationOptions: {
      title: 'Knapsack'
    }
  },
  NoteList: { 
    screen: NoteList,
    navigationOptions: {
      title: 'NoteList'
    },
  },
  Note: {
    screen: Note,
    navigationOptions: {
      title: 'Note'
    }
  },
});
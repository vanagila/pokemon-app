import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { getCharacters } from "../../store/modules/characters/actions";

export const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  });
};

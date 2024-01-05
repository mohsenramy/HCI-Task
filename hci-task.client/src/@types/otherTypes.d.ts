export type SelectOptions = {
  label: string;
  value: number | string;
};

export type GroupType = {
  label: string;
  options: OptionType[];
};

export type OptionsOrGroups<T extends OptionType, G extends GroupType> = Array<
  T | G
>;

export type OptionType = {
  label: string;
  value: string;
};

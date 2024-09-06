import { Textarea } from "@nextui-org/input";
import { extendVariants } from "@nextui-org/system";

export const MyTextarea = extendVariants(Textarea, {
  variants: {
    isInvalid: {
      true: {
        label: ["!text-red-800", "dark:!text-red-800"],
        input: [
          "!bg-red-500",
          "dark:!bg-red-500",
          "!text-red-800",
          "dark:!text-red-800",
          "placeholder:!text-white/70",
          "dark:placeholder:!text-white/70"
        ],
        innerWrapper: ["!bg-transparent"],
        inputWrapper: [
          "!shadow-xl",
          "!backdrop-blur-xl",
          "!backdrop-saturate-200",
          "dark:!bg-red-500/70",
          "hover:!bg-red-500/60",
          "dark:hover:!bg-red-500/60",
          "group-data-[focus=true]:!bg-red-500/60",
          "dark:group-data-[focus=true]:!bg-red-500/60",
          "!cursor-text"
        ],
        class: "!text-red-800 !bg-red-500 !text-red-800"
      },
      false: {
        label: "!text-white/50 dark:!text-white/90",
        input: [
          "bg-transparent",
          "!text-white/90",
          "dark:!text-white",
          "placeholder:!text-white/70",
          "dark:placeholder:!text-white/70"
        ],
        innerWrapper: ["bg-transparent", "placeholder:!text-white"],
        inputWrapper: [
          "shadow-xl",
          "bg-default-900",
          "dark:bg-default/60",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-default-200/70",
          "dark:hover:bg-default/70",
          "group-data-[focus=true]:bg-default-200/50",
          "dark:group-data-[focus=true]:bg-default/60",
          "!cursor-text"
        ],
        errorMessage: "text-sm"
      }
    }
  },
  defaultVariants: {},
  compoundVariants: [
    {
      isInvalid: true,
      class: "text-blue-500/50 dark:text-blue-500/90"
    }
  ]
});

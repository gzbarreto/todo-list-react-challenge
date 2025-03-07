import { Trash } from "@phosphor-icons/react";

export function Task() {
  return (
    <div>
      <input type="checkbox">
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
      </input>
      <button>
        <Trash size={14} />
      </button>
    </div>
  )
}
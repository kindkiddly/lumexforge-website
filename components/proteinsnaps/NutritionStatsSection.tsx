const STATS = [
  {
    number: "186g",
    label: "Protein",
    tag: "Daily Average",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M12 28c2-8 6-14 8-18 1.5-2.5 4-4 6-3.5 2 .5 2.5 3 1.5 5.5-1.5 3.5-5 10-6.5 14-1 3-3 4.5-5 4.5s-3.5-1-4-3z"
          stroke="#E05252"
          strokeWidth="1.5"
          fill="#E05252"
          fillOpacity="0.15"
        />
        <path d="M20 10v4M18 12h4" stroke="#E05252" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "220g",
    label: "Carbs",
    tag: "Daily Average",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M20 8c-4 6-8 10-8 16a8 8 0 0016 0c0-6-4-10-8-16z"
          stroke="#D4A017"
          strokeWidth="1.5"
          fill="#D4A017"
          fillOpacity="0.12"
        />
        <path
          d="M20 14v12M16 18h8M17 22h6"
          stroke="#D4A017"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "65g",
    label: "Fats",
    tag: "Daily Average",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M20 10c-6 8-10 12-10 18a10 10 0 0020 0c0-6-4-10-10-18z"
          stroke="#5BA55B"
          strokeWidth="1.5"
          fill="#5BA55B"
          fillOpacity="0.15"
        />
        <path
          d="M20 16c0 4-2 6-2 9"
          stroke="#5BA55B"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "2,100",
    label: "Calories",
    tag: "Daily Average",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M22 8c0 4-6 6-6 12 0 5 4 9 8 9s8-4 8-9c0-4-3-7-6-8-1 3-2 5-4 6-1-4 0-7 0-10z"
          stroke="#E8762A"
          strokeWidth="1.5"
          fill="#E8762A"
          fillOpacity="0.15"
          strokeLinejoin="round"
        />
        <path d="M18 28h4" stroke="#E8762A" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
  },
] as const;

export function NutritionStatsSection() {
  return (
    <section className="bg-transparent py-20" aria-labelledby="nutrition-stats-heading">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="nutrition-stats-heading"
            className="font-serif text-3xl font-semibold tracking-tight text-[#1A1A1A] sm:text-4xl"
          >
            Track What Matters
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-[#555555]">
            Real numbers. Real progress. Every day.
          </p>
        </div>

        <div
          className="mx-auto mt-10 h-px w-[60%] max-w-3xl bg-[#00E6A8] opacity-30"
          aria-hidden="true"
        />

        <ul className="mt-10 grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
          {STATS.map((stat) => (
            <li key={stat.label} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-10 w-10 items-center justify-center">{stat.icon}</div>
              <p className="text-[48px] font-bold leading-none text-[#1A1A1A]">{stat.number}</p>
              <p className="mt-2 text-sm text-[#555555]">{stat.label}</p>
              <p className="mt-1 text-xs text-[#94A3B8]">{stat.tag}</p>
            </li>
          ))}
        </ul>

        <div
          className="mx-auto mt-10 h-px w-[60%] max-w-3xl bg-[#00E6A8] opacity-30"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

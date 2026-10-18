import { Badge } from "@/components/ui/badge";
import type { Dictionary } from "@/content/dictionaries";
import { skills } from "@/content/skills";

export function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">
        {dict.about.heading}
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        {dict.about.body}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        {dict.about.education}
      </p>

      <h3 className="mt-10 text-sm font-medium text-muted-foreground uppercase tracking-wide">
        {dict.about.skillsHeading}
      </h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}

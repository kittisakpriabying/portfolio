import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/content/dictionaries";
import { projects } from "@/content/projects";

export function Projects({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">
        {dict.projects.heading}
      </h2>
      <p className="mt-2 text-muted-foreground">{dict.projects.subheading}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.slug}>
            <CardHeader>
              <CardTitle>{project.title[locale]}</CardTitle>
              <CardDescription>{project.description[locale]}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            {(project.demoUrl || project.codeUrl) && (
              <CardFooter className="gap-4 text-sm">
                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline-offset-4 hover:underline"
                  >
                    {dict.projects.viewDemo}
                  </Link>
                )}
                {project.codeUrl && (
                  <Link
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground underline-offset-4 hover:underline"
                  >
                    {dict.projects.viewCode}
                  </Link>
                )}
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}

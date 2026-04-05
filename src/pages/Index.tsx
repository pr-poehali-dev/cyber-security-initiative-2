const Index = () => {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 py-16 relative"
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/projects/551a6293-06bd-475b-9405-4ac4670d3f24/files/54b07910-8638-400d-81bb-d58105d29fea.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <p
        className="relative z-10 text-white/85 text-lg md:text-xl leading-[2.2] max-w-lg whitespace-pre-line"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
      >
        {`Во мне гниют слова,
Которые я не сказал
Лучше буду молчать, пока не сошла с ума моя голова,
Что бы не устроить с собою скандал.

Я неразборчиво буду писать эти строки,
Во мне гниют слова которые я все еще не сказал.
Когда нибудь все это будет в диалоге,
Но пока я вижу лишь себя, в отражении зеркал.

Эту любовь к тебе я выдумал сам,
И от этого страдаю уже много лет.
Я про тебя все поэмы написал,
Прокручивая в голове каждый момент.

Ты моя последняя мысль перед сном,
И самая первая после сна.
Все свои чувства тебе отправлю я письмом,
Где будут только важные слова.`}
      </p>
    </main>
  );
};

export default Index;
import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Activity, Ruler } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type BmiResult = { value: number; category: string; color: string } | null;
type WaistResult = { risk: string; color: string } | null;

const getBmiCategory = (bmi: number) => {
  if (bmi < 18.5) return { category: "Abaixo do peso", color: "text-yellow-600" };
  if (bmi < 25) return { category: "Peso normal", color: "text-green-600" };
  if (bmi < 30) return { category: "Sobrepeso", color: "text-orange-500" };
  if (bmi < 35) return { category: "Obesidade Grau I", color: "text-red-500" };
  if (bmi < 40) return { category: "Obesidade Grau II", color: "text-red-600" };
  return { category: "Obesidade Grau III", color: "text-red-700" };
};

const getWaistRisk = (waist: number, sex: "M" | "F") => {
  if (sex === "M") {
    if (waist < 94) return { risk: "Risco baixo", color: "text-green-600" };
    if (waist < 102) return { risk: "Risco elevado", color: "text-orange-500" };
    return { risk: "Risco muito elevado", color: "text-red-600" };
  }
  if (waist < 80) return { risk: "Risco baixo", color: "text-green-600" };
  if (waist < 88) return { risk: "Risco elevado", color: "text-orange-500" };
  return { risk: "Risco muito elevado", color: "text-red-600" };
};

const HealthCalculators = () => {
  // BMI state
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState<BmiResult>(null);

  // Waist state
  const [waist, setWaist] = useState("");
  const [sex, setSex] = useState<"M" | "F">("M");
  const [waistResult, setWaistResult] = useState<WaistResult>(null);

  const calculateBmi = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (!w || !h || h <= 0) return;
    const bmi = w / (h * h);
    const { category, color } = getBmiCategory(bmi);
    setBmiResult({ value: Math.round(bmi * 10) / 10, category, color });
  };

  const calculateWaist = () => {
    const w = parseFloat(waist);
    if (!w || w <= 0) return;
    setWaistResult(getWaistRisk(w, sex));
  };

  return (
    <section id="calculadoras" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary bg-accent px-4 py-1.5 rounded-full">
            Ferramentas
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Calculadoras de Saúde
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Avalie indicadores importantes para sua saúde endócrina. Lembre-se: estes cálculos são orientativos e não substituem a consulta médica.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-lg mx-auto"
        >
          <Tabs defaultValue="imc" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="imc" className="gap-2">
                <Calculator size={16} />
                IMC
              </TabsTrigger>
              <TabsTrigger value="cintura" className="gap-2">
                <Ruler size={16} />
                Circunferência Abdominal
              </TabsTrigger>
            </TabsList>

            {/* IMC Calculator */}
            <TabsContent value="imc">
              <div className="bg-card border border-border rounded-xl p-6 mt-4 space-y-5">
                <div className="flex items-center gap-2 mb-2">
                  <Activity size={20} className="text-primary" />
                  <h3 className="font-heading text-lg font-semibold text-card-foreground">
                    Índice de Massa Corporal
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Peso (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="Ex: 72"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      min="1"
                      max="500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Altura (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="Ex: 175"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      min="50"
                      max="300"
                    />
                  </div>
                </div>

                <Button onClick={calculateBmi} className="w-full">
                  Calcular IMC
                </Button>

                {bmiResult && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-accent/50 rounded-lg p-5 text-center space-y-1"
                  >
                    <p className="text-sm text-muted-foreground">Seu IMC é</p>
                    <p className="text-4xl font-heading font-bold text-foreground">
                      {bmiResult.value}
                    </p>
                    <p className={`text-sm font-semibold ${bmiResult.color}`}>
                      {bmiResult.category}
                    </p>
                  </motion.div>
                )}

                <p className="text-xs text-muted-foreground leading-relaxed">
                  O IMC é uma medida de triagem e não diagnostica a gordura corporal ou a saúde de um indivíduo. Consulte seu endocrinologista para uma avaliação completa.
                </p>
              </div>
            </TabsContent>

            {/* Waist Circumference */}
            <TabsContent value="cintura">
              <div className="bg-card border border-border rounded-xl p-6 mt-4 space-y-5">
                <div className="flex items-center gap-2 mb-2">
                  <Ruler size={20} className="text-primary" />
                  <h3 className="font-heading text-lg font-semibold text-card-foreground">
                    Risco Metabólico por Circunferência Abdominal
                  </h3>
                </div>

                <div className="space-y-2">
                  <Label>Sexo biológico</Label>
                  <RadioGroup
                    value={sex}
                    onValueChange={(v) => setSex(v as "M" | "F")}
                    className="flex gap-6"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="M" id="sex-m" />
                      <Label htmlFor="sex-m" className="cursor-pointer">Masculino</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="F" id="sex-f" />
                      <Label htmlFor="sex-f" className="cursor-pointer">Feminino</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="waist">Circunferência abdominal (cm)</Label>
                  <Input
                    id="waist"
                    type="number"
                    placeholder="Ex: 88"
                    value={waist}
                    onChange={(e) => setWaist(e.target.value)}
                    min="30"
                    max="300"
                  />
                </div>

                <Button onClick={calculateWaist} className="w-full">
                  Avaliar Risco
                </Button>

                {waistResult && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-accent/50 rounded-lg p-5 text-center space-y-1"
                  >
                    <p className="text-sm text-muted-foreground">Classificação</p>
                    <p className={`text-xl font-heading font-bold ${waistResult.color}`}>
                      {waistResult.risk}
                    </p>
                  </motion.div>
                )}

                <p className="text-xs text-muted-foreground leading-relaxed">
                  A circunferência abdominal é um indicador de risco para doenças cardiovasculares e metabólicas como diabetes tipo 2. Valores de referência: Homens ≥94cm (elevado), ≥102cm (muito elevado); Mulheres ≥80cm (elevado), ≥88cm (muito elevado).
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default HealthCalculators;
